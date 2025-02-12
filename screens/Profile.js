import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();
    const [isWeightMonitoring, setIsWeightMonitoring] = React.useState(false);

    return (
        <ScrollView style={styles.container}>
            {/* Nút back */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="blue" />
            </TouchableOpacity>

            {/* Section: More */}
            <Text style={styles.sectionTitle}>More</Text>
            <TouchableOpacity style={styles.menuItem}>
                <Ionicons name="person-outline" size={24} />
                <Text style={styles.menuText}>Personal Details</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <Ionicons name="bar-chart-outline" size={24} />
                <Text style={styles.menuText}>Limit Values</Text>
                <Ionicons name="chevron-forward-outline" size={20} />
            </TouchableOpacity>

            <View style={styles.menuItem}>
                <Ionicons name="fitness-outline" size={24} />
                <Text style={styles.menuText}>Weight Monitoring</Text>
                <Switch
                    value={isWeightMonitoring}
                    onValueChange={setIsWeightMonitoring}
                />
            </View>

            <TouchableOpacity style={[styles.menuItem, styles.activeItem]}>
                <Ionicons name="pulse-outline" size={24} />
                <Text style={[styles.menuText, styles.boldText]}>BP Monitor</Text>
                <Ionicons name="chevron-down-outline" size={20} />
            </TouchableOpacity>

            {/* Section: Help */}
            <Text style={styles.sectionTitle}>Help</Text>
            <TouchableOpacity style={styles.menuItem}>
                <Ionicons name="document-text-outline" size={24} />
                <Text style={styles.menuText}>FAQ’s</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <Ionicons name="help-circle-outline" size={24} />
                <Text style={styles.menuText}>Support</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <Ionicons name="chatbubble-ellipses-outline" size={24} />
                <Text style={styles.menuText}>Feedback</Text>
            </TouchableOpacity>

            {/* Section: About */}
            <Text style={styles.sectionTitle}>About</Text>
            <TouchableOpacity style={styles.menuItem}>
                <Ionicons name="document-outline" size={24} />
                <Text style={styles.menuText}>Terms & conditions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <Ionicons name="lock-closed-outline" size={24} />
                <Text style={styles.menuText}>Privacy Policy</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    backButton: {
        marginBottom: 20,
        color: "black",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    menuText: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
    },
    activeItem: {
        backgroundColor: "#eee",
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    boldText: {
        fontWeight: "bold",
    },
});

