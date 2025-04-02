import { StyleSheet, View, Dimensions, Pressable } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const gasLevel = 450;
  const isNormal = gasLevel < 1000;
  const screenWidth = Dimensions.get("window").width;

  const chartData = {
    labels: ["8", "9", "10", "11", "12", "13", "14", "15"],
    datasets: [
      {
        data: [2.1, 3.2, 2.5, 3.1, 2.8, 3.5, 4.1, 5.4],
      },
    ],
  };

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <ThemedText type="title">Dashboard</ThemedText>
        </View>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="#3498db" />
          <Pressable onPress={() => router.push("/settings")}>
            <Ionicons name="settings-outline" size={24} color="#3498db" />
          </Pressable>
        </View>
      </View>

      {/* Gas Level Indicator */}
      <View style={styles.gasIndicator}>
        <View style={styles.gasLevelCircle}>
          <ThemedText style={styles.gasLevelLabel}>Gas Level</ThemedText>
          <ThemedText style={styles.gasLevelValue}>{gasLevel}</ThemedText>
          <ThemedText style={styles.gasLevelUnit}>PPM</ThemedText>
          <ThemedText
            style={[
              styles.gasStatus,
              { color: isNormal ? "#3498db" : "#e74c3c" },
            ]}
          >
            {isNormal ? "NORMAL" : "WARNING"}
          </ThemedText>
        </View>
      </View>

      {/* Alerts Section */}
      <View style={styles.alertsSection}>
        <ThemedText style={styles.sectionTitle}>Alerts</ThemedText>
        <View style={styles.alertCard}>
          <Ionicons name="warning" size={24} color="#e74c3c" />
          <View style={styles.alertContent}>
            <ThemedText style={styles.alertText}>Gas leak detected</ThemedText>
            <ThemedText style={styles.alertTime}>Today, 11:30 AM</ThemedText>
          </View>
          <Pressable onPress={() => router.push("/alertsHistory")}>
            <Ionicons name="chevron-forward" size={24} color="#3498db" />
          </Pressable>
        </View>
      </View>

      {/* Graph Section */}
      <View style={styles.graphSection}>
        <LineChart
          data={chartData}
          width={screenWidth - 65}
          height={180}
          chartConfig={{
            backgroundColor: "#1e1e1e",
            backgroundGradientFrom: "#1e1e1e",
            backgroundGradientTo: "#1e1e1e",
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 15,
  },
  gasIndicator: {
    alignItems: "center",
    marginBottom: 20,
  },
  gasLevelCircle: {
    width: 300,
    height: 300,
    borderRadius: 200,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#3498db",
  },
  gasLevelLabel: {
    fontSize: 24,
    color: "#3498db",
    marginBottom: 10,
  },
  gasLevelValue: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  gasLevelUnit: {
    fontSize: 20,
    color: "#666",
    marginTop: 8,
  },
  gasStatus: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 8,
  },
  alertsSection: {
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
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
  graphSection: {
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
