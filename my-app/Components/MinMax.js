import { View ,Text } from "react-native"

export default function MinMax (props) {

    const { min, max } = props   
    console.warn(props)

    return (
      <View>
        <Text>{max} è maior que {min}</Text>
      </View>
    )
} 