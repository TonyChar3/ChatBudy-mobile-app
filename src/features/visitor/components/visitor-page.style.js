import styled from "styled-components";
import { FlatList, TouchableOpacity } from "react-native";

/**
 * Visitor Screen
 */
export const VisitorScreenContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyVisitorMessageContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const VisitorCardList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  margin: 0 auto;
`;

/**
 * Visitor Card component
 */
export const VisitorCardContainer = styled.View`
  width: 90%;
  padding: 19px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #6c2e9c;
  margin: 16px;
  border-radius: 10px;
`;

export const VisitorCardDivider = styled.View`
  width: 40%;
  height: 2px;
  background-color: #a881d4;
  border-radius: 10px;
  margin: 0 auto;
`;

export const VisitorNameContainer = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const VisitorCardInfoContainer = styled.View`
  position: absolute;
  left: 59%;
  width: 30%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #a881d4;
  border-radius: 20px;
`;

export const VisitorCardActionContainer = styled.View`
  position: absolute;
  left: 57%;
  width: 39%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #a881d4;
  border-radius: 20px;
`;

export const VisitorTimeEnteredContainer = styled.View`
  width: 25%;
  justify-content: center;
  align-items: center;
`;

export const VisitorCardActionButtonContainer = styled.View`
  width: 16%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
