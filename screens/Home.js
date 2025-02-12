import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const popularFeatures = [
    { id: 1, name: "Blood Pressure", icon: "water" },
    { id: 2, name: "Health Suggestion", icon: "medkit" },
    { id: 3, name: "Your history", icon: "document-text" },
    { id: 4, name: "Weight & BMI", icon: "body" },
    { id: 5, name: "Health Goals", icon: "fitness" },
    { id: 6, name: "Feature name", icon: "apps" },
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello</Text>
          <Text style={styles.username}>Nguyen Van A</Text>
        </View>
        <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search..." />
        <TouchableOpacity style={styles.searchIcon}>
          <Ionicons name="options-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Most Popular Section */}
      <Text style={styles.sectionTitle}>Most popular</Text>
      <View style={styles.gridContainer}>
        {popularFeatures.map((item) => (
          <TouchableOpacity key={item.id} style={styles.featureBox}>
            <Ionicons name={item.icon} size={28} color="black" />
            <Text style={styles.featureText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Upcoming Appointments */}
      <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
      <View style={styles.appointmentCard}>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>12</Text>
          <Text style={styles.dayText}>Tue</Text>
        </View>
        <View style={styles.appointmentDetails}>
          <Text style={styles.appointmentTime}>08:30 AM</Text>
          <Text style={styles.appointmentTitle}>Lorem ipsum</Text>
          <Text style={styles.appointmentDescription}>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: "gray",
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
  },
  profileIcon: {
    padding: 5,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureBox: {
    width: "30%",
    aspectRatio: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  featureText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
  appointmentCard: {
    flexDirection: "row",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  dateBox: {
    width: 50,
    height: 50,
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  dayText: {
    fontSize: 14,
    color: "white",
  },
  appointmentDetails: {
    flex: 1,
  },
  appointmentTime: {
    fontSize: 14,
    color: "gray",
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  appointmentDescription: {
    fontSize: 14,
    color: "gray",
  },
});

