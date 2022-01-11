import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const Screen_Width = width < height ? width : height;
const Columns = 2;
const Const_Height = 150;
const Const_Margin = 20;

export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Const_Margin,
    marginTop: 20,
    width: (Screen_Width - (Columns + 1) * Const_Margin) / Columns,
    height: Const_Height + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (Screen_Width - (Columns + 1) * Const_Margin) / Columns,
    height: Const_Height,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  }
});