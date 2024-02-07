import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoad = (syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;

    if (nativeEvent.loading) {
      // Page start loading
      setLoading(true);
    } else {
      // Page finished loading
      setLoading(false);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://crm.bharatcertis.com/admin/dashboard" }}
        style={{ flex: 1 }}
        onLoad={handleLoad}
      />

      {showLogo && (
        <View style={styles.loader2}>
          <Image style={styles.image} source={require("./assets/icon.png")} />
        </View>
      )}

      {loading && !showLogo && (
        <View style={styles.loader}>
          <ActivityIndicator
            style={{ marginTop: 20 }}
            size="large"
            color="#0000ff"
          />
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  loader2: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: "white",
    aspectRatio: 1,
  },
};

export default App;
