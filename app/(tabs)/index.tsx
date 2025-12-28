import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  duration: string;
  level: string;
}

const COURSES: Course[] = [
  {
    id: "1",
    title: "Machine Learning Fundamentals",
    description: "Learn the basics of ML algorithms and neural networks",
    progress: 65,
    duration: "8 weeks",
    level: "Beginner",
  },
  {
    id: "2",
    title: "Deep Learning with PyTorch",
    description: "Master deep learning using PyTorch framework",
    progress: 30,
    duration: "10 weeks",
    level: "Intermediate",
  },
  {
    id: "3",
    title: "Natural Language Processing",
    description: "Build NLP models and understand transformers",
    progress: 80,
    duration: "6 weeks",
    level: "Advanced",
  },
  {
    id: "4",
    title: "Computer Vision",
    description: "Image classification and object detection",
    progress: 15,
    duration: "8 weeks",
    level: "Intermediate",
  },
];

export default function AICoursesScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = COURSES.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          
          
        </View>

        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#999"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search courses..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.coursesContainer}>
          {filteredCourses.map((course) => (
            <TouchableOpacity key={course.id} style={styles.courseCard}>
              <View style={styles.courseHeader}>
                <View style={styles.levelBadge}>
                  <Text style={styles.levelText}>{course.level}</Text>
                </View>
                <Text style={styles.duration}>{course.duration}</Text>
              </View>

              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>

              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${course.progress}%` },
                    ]}
                  />
                </View>
                <Text style={styles.progressText}>{course.progress}%</Text>
              </View>

              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue Learning</Text>
                <Ionicons name="arrow-forward" size={16} color="#007AFF" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 24,
    marginBottom: 16,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  coursesContainer: {
    padding: 24,
    paddingTop: 8,
    gap: 16,
  },
  courseCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  levelBadge: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  duration: {
    fontSize: 14,
    color: "#666",
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 15,
    color: "#666",
    marginBottom: 16,
    lineHeight: 22,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#34C759",
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    minWidth: 40,
  },
  continueButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f7ff",
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  continueButtonText: {
    color: "#007AFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
