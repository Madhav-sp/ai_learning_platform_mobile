import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const SCREEN_WIDTH = Dimensions.get("window").width;

interface StatCard {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: keyof typeof Ionicons.glyphMap;
}

const STATS: StatCard[] = [
  {
    label: "Total Study Time",
    value: "47.5h",
    change: "+12%",
    isPositive: true,
    icon: "time-outline",
  },
  {
    label: "Courses Completed",
    value: "8",
    change: "+2",
    isPositive: true,
    icon: "trophy-outline",
  },
  {
    label: "Avg. Score",
    value: "87%",
    change: "+5%",
    isPositive: true,
    icon: "star-outline",
  },
  {
    label: "Learning Streak",
    value: "15 days",
    change: "+3",
    isPositive: true,
    icon: "flame-outline",
  },
];

const WEEKLY_DATA = [
  { day: "Mon", hours: 4.5 },
  { day: "Tue", hours: 6.2 },
  { day: "Wed", hours: 3.8 },
  { day: "Thu", hours: 7.5 },
  { day: "Fri", hours: 5.0 },
  { day: "Sat", hours: 8.2 },
  { day: "Sun", hours: 6.5 },
];

export default function AnalyticsScreen() {
  const maxHours = Math.max(...WEEKLY_DATA.map((d) => d.hours));

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          {/* <Text style={styles.headerTitle}>Analytics</Text> */}
          {/* <Text style={styles.headerSubtitle}>
            Track your learning progress
          </Text> */}
        </View>

        <View style={styles.periodSelector}>
          <TouchableOpacity style={styles.periodButton}>
            <Text style={styles.periodButtonText}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.periodButton, styles.periodButtonActive]}
          >
            <Text
              style={[styles.periodButtonText, styles.periodButtonTextActive]}
            >
              Month
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.periodButton}>
            <Text style={styles.periodButtonText}>Year</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsGrid}>
          {STATS.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <Ionicons name={stat.icon} size={24} color="#007AFF" />
              </View>
              <Text style={styles.statLabel}>{stat.label}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
              <View style={styles.changeContainer}>
                <Ionicons
                  name={stat.isPositive ? "arrow-up" : "arrow-down"}
                  size={12}
                  color={stat.isPositive ? "#34C759" : "#FF3B30"}
                />
                <Text
                  style={[
                    styles.changeText,
                    { color: stat.isPositive ? "#34C759" : "#FF3B30" },
                  ]}
                >
                  {stat.change}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Weekly Study Time</Text>
            <TouchableOpacity>
              <Ionicons name="ellipsis-horizontal" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.chart}>
            {WEEKLY_DATA.map((item, index) => {
              const barHeight = (item.hours / maxHours) * 120;
              return (
                <View key={index} style={styles.barContainer}>
                  <View style={styles.barWrapper}>
                    <View style={[styles.bar, { height: barHeight }]}>
                      <Text style={styles.barValue}>{item.hours}h</Text>
                    </View>
                  </View>
                  <Text style={styles.dayLabel}>{item.day}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.achievementsCard}>
          <View style={styles.achievementsHeader}>
            <Text style={styles.chartTitle}>Recent Achievements</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.achievementsList}>
            <View style={styles.achievementItem}>
              <View style={styles.achievementIcon}>
                <Ionicons name="trophy" size={24} color="#FFD700" />
              </View>
              <View style={styles.achievementContent}>
                <Text style={styles.achievementTitle}>Course Master</Text>
                <Text style={styles.achievementDesc}>
                  Completed 5 courses in one month
                </Text>
              </View>
              <Text style={styles.achievementDate}>2d ago</Text>
            </View>

            <View style={styles.achievementItem}>
              <View style={styles.achievementIcon}>
                <Ionicons name="flame" size={24} color="#FF6B6B" />
              </View>
              <View style={styles.achievementContent}>
                <Text style={styles.achievementTitle}>Streak Champion</Text>
                <Text style={styles.achievementDesc}>
                  Maintained 15-day learning streak
                </Text>
              </View>
              <Text style={styles.achievementDate}>1w ago</Text>
            </View>
          </View>
        </View>

        <View style={styles.emptySpace} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    paddingTop: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 15,
    color: "#666",
  },
  periodSelector: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  periodButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 8,
  },
  periodButtonActive: {
    backgroundColor: "#007AFF",
  },
  periodButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  periodButtonTextActive: {
    color: "#fff",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    gap: 12,
  },
  statCard: {
    width: (SCREEN_WIDTH - 60) / 2,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  statIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f0f7ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 13,
    color: "#666",
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  changeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  changeText: {
    fontSize: 13,
    fontWeight: "600",
  },
  chartCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 24,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  chart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 160,
  },
  barContainer: {
    flex: 1,
    alignItems: "center",
  },
  barWrapper: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bar: {
    width: 32,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 4,
  },
  barValue: {
    fontSize: 10,
    fontWeight: "600",
    color: "#fff",
  },
  dayLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 8,
  },
  achievementsCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 24,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  achievementsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  viewAllText: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "600",
  },
  achievementsList: {
    gap: 16,
  },
  achievementItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },
  achievementDesc: {
    fontSize: 13,
    color: "#666",
  },
  achievementDate: {
    fontSize: 12,
    color: "#999",
  },
  emptySpace: {
    height: 20,
  },
});
