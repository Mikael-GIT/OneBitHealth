import React from "react"
import { View, Text, TouchableOpacity, Share } from "react-native"
import styles from "./style";

export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + props.resultImc
        })
    }

    return (
        <View style={styles.resultImc}>
            <View style={styles.boxShareButton}>
                { props.resultImc != null ? //Se o props.resultImc for nulo, retorna o touchableopacity, se não retorna uma view vazia. 
                <TouchableOpacity style={styles.share}
                onPress={onShare}>
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
                : <View/>
                }  
            </View>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
} 