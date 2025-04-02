import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Switch,
  Pressable,
  TextInput,
  Modal,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Slider from "@react-native-community/slider";

export default function SettingsScreen() {
  const router = useRouter();
  const [threshold, setThreshold] = useState(250);
  const [isSystemActive, setIsSystemActive] = useState(false);
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [customValue, setCustomValue] = useState("");
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const currentGasLevel = 450;

  const handleCustomSubmit = () => {
    const value = parseInt(customValue);
    if (!isNaN(value) && value >= 0 && value <= 1000) {
      setThreshold(value);
      setIsCustomMode(false);
    }
  };

  const handleSaveConfirm = () => {
    // Add your save logic here
    setShowSaveModal(false);
  };

  const handleCancelConfirm = () => {
    setThreshold(250); // Reset to default
    setShowCancelModal(false);
  };

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#3498db" />
          <ThemedText style={styles.headerTitle}>SETTINGS</ThemedText>
        </Pressable>
      </View>

      {/* Current Gas Level Display */}
      <View style={styles.gasIndicator}>
        <View style={styles.gasLevelCircle}>
          <ThemedText style={styles.gasLevelLabel}>
            Current Gas Level
          </ThemedText>
          <ThemedText style={styles.gasLevelValue}>
            {currentGasLevel}
          </ThemedText>
          <ThemedText style={styles.gasLevelUnit}>PPM</ThemedText>
          <ThemedText style={[styles.gasStatus, { color: "#3498db" }]}>
            NORMAL
          </ThemedText>
        </View>
      </View>

      {/* Threshold Settings */}
      <View style={styles.thresholdContainer}>
        <View style={styles.thresholdHeader}>
          <ThemedText style={styles.thresholdLabel}>Set Threshold</ThemedText>
          <Pressable onPress={() => setIsCustomMode(!isCustomMode)}>
            <ThemedText style={styles.customText}>
              {isCustomMode ? "Slider" : "Custom"}
            </ThemedText>
          </Pressable>
        </View>

        <View style={styles.thresholdValue}>
          {isCustomMode ? (
            <View style={styles.customInputContainer}>
              <TextInput
                style={styles.customInput}
                value={customValue}
                onChangeText={setCustomValue}
                keyboardType="numeric"
                placeholder="Enter threshold (0-1000)"
                placeholderTextColor="#666"
                onSubmitEditing={handleCustomSubmit}
              />
              <ThemedText style={styles.thresholdUnit}>PPM</ThemedText>
            </View>
          ) : (
            <>
              <ThemedText style={styles.thresholdNumber}>
                {threshold}
              </ThemedText>
              <ThemedText style={styles.thresholdUnit}>PPM</ThemedText>
            </>
          )}
        </View>

        {!isCustomMode && (
          <>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1000}
              value={threshold}
              onValueChange={setThreshold}
              minimumTrackTintColor="#3498db"
              maximumTrackTintColor="#666"
              thumbTintColor="#3498db"
            />
            <View style={styles.sliderLabels}>
              <ThemedText style={styles.sliderLabel}>0</ThemedText>
              <ThemedText style={styles.sliderLabel}>1000</ThemedText>
            </View>
          </>
        )}

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setShowSaveModal(true)}
          >
            <ThemedText style={styles.buttonText}>Save Changes</ThemedText>
          </Pressable>
          <Pressable
            style={[styles.button, styles.cancelButton]}
            onPress={() => setShowCancelModal(true)}
          >
            <ThemedText style={styles.buttonText}>Cancel</ThemedText>
          </Pressable>
        </View>
      </View>

      {/* System Toggle */}
      <View style={styles.systemContainer}>
        <View style={styles.systemRow}>
          <View>
            <ThemedText style={styles.systemTitle}>System</ThemedText>
            <ThemedText style={styles.systemStatus}>
              {isSystemActive ? "Active" : "Inactive"}
            </ThemedText>
          </View>
          <View style={styles.toggleContainer}>
            <ThemedText style={styles.toggleLabel}>
              {isSystemActive ? "Turn Off" : "Turn On"}
            </ThemedText>
            <Switch
              value={isSystemActive}
              onValueChange={setIsSystemActive}
              trackColor={{ false: "#666", true: "#3498db" }}
              thumbColor="#fff"
            />
          </View>
        </View>
      </View>

      {/* Save Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showSaveModal}
        onRequestClose={() => setShowSaveModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ThemedText style={styles.modalTitle}>Confirm Changes</ThemedText>
            <ThemedText style={styles.modalText}>
              Are you sure you want to save these changes?
            </ThemedText>
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleSaveConfirm}
              >
                <ThemedText style={styles.buttonText}>Confirm</ThemedText>
              </Pressable>
              <Pressable
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowSaveModal(false)}
              >
                <ThemedText style={styles.buttonText}>Cancel</ThemedText>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Cancel Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showCancelModal}
        onRequestClose={() => setShowCancelModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ThemedText style={styles.modalTitle}>Cancel Changes</ThemedText>
            <ThemedText style={styles.modalText}>
              Are you sure you want to cancel? All changes will be lost.
            </ThemedText>
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleCancelConfirm}
              >
                <ThemedText style={styles.buttonText}>Confirm</ThemedText>
              </Pressable>
              <Pressable
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowCancelModal(false)}
              >
                <ThemedText style={styles.buttonText}>Cancel</ThemedText>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    marginBottom: 60,
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

  gasIndicator: {
    alignItems: "center",
    marginBottom: 30,
  },
  gasLevelLabel: {
    fontSize: 16,
    color: "#3498db",
    marginBottom: 10,
  },
  gasLevelCircle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#3498db",
  },
  gasLevelValue: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  gasLevelUnit: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  gasStatus: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 1,
  },
  thresholdContainer: {
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  thresholdHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  thresholdLabel: {
    fontSize: 16,
    color: "#fff",
  },
  customText: {
    fontSize: 14,
    color: "#3498db",
  },
  thresholdValue: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 15,
  },
  thresholdNumber: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3498db",
  },
  thresholdUnit: {
    fontSize: 16,
    color: "#3498db",
    marginLeft: 5,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -10,
  },
  sliderLabel: {
    fontSize: 12,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#666",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  systemContainer: {
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 20,
  },
  systemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  systemTitle: {
    fontSize: 16,
    color: "#3498db",
  },
  systemStatus: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  toggleLabel: {
    fontSize: 14,
    color: "#3498db",
  },
  customInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  customInput: {
    backgroundColor: "#2a2a2a",
    color: "#3498db",
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 8,
    width: 265,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  confirmButton: {
    backgroundColor: "#3498db",
  },
});
