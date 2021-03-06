import React from "react";
import { ScrollView, Linking, View } from "react-native";
import { Card, Button,Text } from "react-native-elements";
import {Header, Item, Icon, Input, Container} from "native-base"

export default ({navigation}) => (
  <View style={{ paddingVertical: 20 }}>
  <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
    <Card title="Abhinav's Home">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >

        <Text style={{ color: "white", fontSize: 28 }}>AB</Text>
      </View>

    </Card>
  </View>
);
