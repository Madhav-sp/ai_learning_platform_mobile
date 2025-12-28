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

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  updatedAt: string;
}

const NOTES: Note[] = [
  {
    id: "1",
    title: "Neural Network Architectures",
    content: "Key concepts about CNNs, RNNs, and Transformers...",
    tags: ["deep-learning", "architecture"],
    updatedAt: "2 hours ago",
  },
  {
    id: "2",
    title: "Gradient Descent Optimization",
    content: "Notes on SGD, Adam, and learning rate scheduling...",
    tags: ["optimization", "algorithms"],
    updatedAt: "1 day ago",
  },
  {
    id: "3",
    title: "Transfer Learning Strategies",
    content: "Fine-tuning pre-trained models for specific tasks...",
    tags: ["transfer-learning", "fine-tuning"],
    updatedAt: "3 days ago",
  },
];

export default function NotebookLMScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = NOTES.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          {/* <Text style={styles.headerTitle}>NotebookLM</Text>
          <Text style={styles.headerSubtitle}>
            Your AI-powered learning notes
          </Text> */}
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
            placeholder="Search notes..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Ionicons name="add-circle-outline" size={20} color="#fff" />
            <Text style={styles.primaryButtonText}>New Note</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Ionicons name="folder-outline" size={20} color="#007AFF" />
            <Text style={styles.secondaryButtonText}>Collections</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.notesContainer}>
          {filteredNotes.map((note) => (
            <TouchableOpacity key={note.id} style={styles.noteCard}>
              <View style={styles.noteHeader}>
                <Text style={styles.noteTitle}>{note.title}</Text>
                <TouchableOpacity style={styles.moreButton}>
                  <Ionicons name="ellipsis-horizontal" size={20} color="#666" />
                </TouchableOpacity>
              </View>

              <Text style={styles.noteContent} numberOfLines={2}>
                {note.content}
              </Text>

              <View style={styles.tagsContainer}>
                {note.tags.map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>#{tag}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.noteFooter}>
                <Text style={styles.updatedAt}>{note.updatedAt}</Text>
                <View style={styles.actionsRow}>
                  <TouchableOpacity style={styles.actionIcon}>
                    <Ionicons name="share-outline" size={18} color="#666" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionIcon}>
                    <Ionicons name="bookmark-outline" size={18} color="#666" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
  actionsContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 16,
    gap: 12,
  },
  primaryButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  secondaryButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  secondaryButtonText: {
    color: "#007AFF",
    fontSize: 15,
    fontWeight: "600",
  },
  notesContainer: {
    padding: 24,
    paddingTop: 8,
    gap: 16,
  },
  noteCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  noteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  noteTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  moreButton: {
    padding: 4,
  },
  noteContent: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  tag: {
    backgroundColor: "#f0f7ff",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 13,
    color: "#007AFF",
    fontWeight: "500",
  },
  noteFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  updatedAt: {
    fontSize: 13,
    color: "#999",
  },
  actionsRow: {
    flexDirection: "row",
    gap: 12,
  },
  actionIcon: {
    padding: 4,
  },
  emptySpace: {
    height: 20,
  },
});
