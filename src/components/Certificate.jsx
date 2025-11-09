import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import React from "react";

const Certificate = ({ name, styles }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.border}>
          <Image
            style={styles.logo}
            src="https://plus.unsplash.com/premium_photo-1677572452964-91e968d02d6a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Text style={styles.title}>Certificate of Achievement</Text>
          <Text style={styles.subtitle}>
            This certificate is proudly presented to
          </Text>
          <Text style={styles.name}>{name || "Your name here"}</Text>
          <Text style={styles.body}>
            For outstanding performance and dedication. We celebrate your
            achievement and wish you continued success.
          </Text>
          <View style={styles.footer}>
            <Text style={styles.signature}>Signature</Text>
            <Text style={styles.signature}>Director</Text>
          </View>
          <Text style={styles.date}>
            Date: {new Date().toLocaleDateString()}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default Certificate;