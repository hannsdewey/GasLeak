import { StyleSheet, View, Pressable } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function AlertsScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#3498db" />
          <ThemedText style={styles.headerTitle}>ALERTS</ThemedText>
        </Pressable>
      </View>
      {/*Alerts History Section */}
      <View style={styles.alertsSection}>
        <ThemedText style={styles.sectionTitle}>History</ThemedText>
        <View style={styles.alertCard}>
          <Ionicons name="warning" size={24} color="#e74c3c" />
          <View style={styles.alertContent}>
            <ThemedText style={styles.alertText}>Gas Leak Detected!</ThemedText>
            <ThemedText style={styles.alertTime}>Today, 11:30 AM</ThemedText>
          </View>
        </View>
        <View style={styles.alertCard}>
          <Ionicons name="warning" size={24} color="#e74c3c" />
          <View style={styles.alertContent}>
            <ThemedText style={styles.alertText}>Gas Leak Detected!</ThemedText>
            <ThemedText style={styles.alertTime}>2 hours ago</ThemedText>
          </View>
        </View>
        <View style={styles.alertCard}>
          <Ionicons name="warning" size={24} color="#e74c3c" />
          <View style={styles.alertContent}>
            <ThemedText style={styles.alertText}>Gas Leak Detected!</ThemedText>
            <ThemedText style={styles.alertTime}>5 hours ago</ThemedText>
          </View>
        </View>
        <View style={styles.alertCard}>
          <Ionicons name="warning" size={24} color="#e74c3c" />
          <View style={styles.alertContent}>
            <ThemedText style={styles.alertText}>Gas Leak Detected!</ThemedText>
            <ThemedText style={styles.alertTime}>5 hours ago</ThemedText>
          </View>
        </View>
        <View style={styles.alertCard}>
          <Ionicons name="warning" size={24} color="#e74c3c" />
          <View style={styles.alertContent}>
            <ThemedText style={styles.alertText}>Gas Leak Detected!</ThemedText>
            <ThemedText style={styles.alertTime}>5 hours ago</ThemedText>
          </View>
        </View>
        <View style={styles.alertCard}>
          <Ionicons name="warning" size={24} color="#e74c3c" />
          <View style={styles.alertContent}>
            <ThemedText style={styles.alertText}>Gas Leak Detected!</ThemedText>
            <ThemedText style={styles.alertTime}>5 hours ago</ThemedText>
          </View>
        </View>
        <View style={styles.alertCard}>
          <Ionicons name="warning" size={24} color="#e74c3c" />
          <View style={styles.alertContent}>
            <ThemedText style={styles.alertText}>Gas Leak Detected!</ThemedText>
            <ThemedText style={styles.alertTime}>5 hours ago</ThemedText>
          </View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  header: {
    marginBottom: 50,
    marginTop: 30,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  alertsSection: {
    padding: 16,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  alertCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  alertContent: {
    flex: 1,
    marginLeft: 15,
  },
  alertText: {
    fontSize: 16,
    color: "#fff",
  },
  alertTime: {
    fontSize: 12,
    color: "#3498db",
    marginTop: 4,
  },
});
