import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

export default function App() {
    const [input,setInput] = useState("")
    const [todos, setTodos] = useState([
        {
            id : 1,
            item : "helloo" ,
            isDone : false
        },
        {
            id : 2,
            item : "hey" ,
            isDone : false

        },
        {
            id : 3,
            item : "mizra" ,
            isDone : false

        },
        {
            id : 4,
            item : "nadeer" ,
            isDone : true

        },
    ])

    const deleteItem = (id) =>{
        setTodos(todos.filter((item)=> item.id !== id))

    }
    const undoItem = (revert) =>{
       
        setTodos(todos.map((item)=>{
            if (item.id === revert.id){
                return {
                    ...item,isDone : false 
                }
                
            }
            return item ;
        }))



    }
    const markCompleted = (todo) =>{
        setTodos(todos.map((item)=>{
            if (item.id === todo.id){
                return {
                    ...item,isDone : true 
                }
                
            }
            return item ;
        }))


    }
    const addItem = () =>{
        if(input){
            setTodos([...todos, {id : todos.length+1 , item : input , isDone : false}])
            setInput("")
    
        }

    }
        
       
    
    const renderItems = ()=>(

        todos.filter((item)=> !item.isDone).map((item)=>(
            <View style={styles.ListView} key={item.id}>
            <View style={styles.items}>
                <TouchableOpacity activeOpacity={.6} style={styles.CompleteButton} onPress={()=>markCompleted(item)}>
                    <View style={styles.circle}></View>
                    <Text style={styles.itemName}>{item.item}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>deleteItem(item.id)} activeOpacity={.6} style={styles.deleteButton}>
                    <Image style={styles.deleteImage} source = {require("./src/assets/icons/delete.png")} />
                </TouchableOpacity>
            </View>
        </View>
        ))
    )


    const CompletedItems = ()=>(

        todos.filter((item)=> item.isDone).map((item)=>(
            <View style={styles.items} key={item.id}>
                        <TouchableOpacity activeOpacity={.6} style={styles.CompleteButton}>
                            <Image style={styles.checkImage}  source = {require("./src/assets/icons/check.png")}/>
                            <Text style={styles.itemName}>{item.item}</Text>
                        </TouchableOpacity>
                        <View style={styles.ButtonContainer}>
                            <TouchableOpacity onPress={()=>undoItem(item)} activeOpacity={.6} style={styles.UndoButton}>
                                <Image style={styles.UndoImage} source = {require("./src/assets/icons/undo.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>deleteItem(item.id)} activeOpacity={.6} style={styles.deleteButton}>
                                <Image style={styles.deleteImage} source = {require("./src/assets/icons/delete.png")} />
                            </TouchableOpacity>
                        </View>
                    </View>
        ))
    )
  return (
    <SafeAreaView  style={styles.Main}>
        <ScrollView style={styles.MainView}>
            <Text style={styles.Title}>My ToDo</Text>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Todo list</Text>
                {renderItems()}

            </View>
            
            <View style={styles.InputContainer}>
                    <View style={styles.InputSection}>
                        <Text style= {styles.add}>+</Text>
                        <TextInput value={input} style={styles.Input} placeholder='Type new todo?...' onChangeText={setInput} />
                    </View>
                    <TouchableOpacity onPress={addItem} activeOpacity={.6} style={styles.InputSubmit}>
                        <Text style={styles.ButtonText}>Add New</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Completed list</Text>
                <View style={styles.ListView}>
                {CompletedItems()}
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Main : {
        flex : 1,
    },
    MainView : {
        paddingTop : 20,
        paddingHorizontal : 30,


    },
    Title : {
        fontSize : 27,
        color : '#000',
        textAlign : 'center',
        fontWeight : 'bold'



    },
    subTitleContainer: {
        paddingVertical : 30,
    },
    subTitle : {
        fontSize : 20,
        color : '#000',
        fontWeight : 'bold',
        marginBottom : 17,
    },
    ListView : {

    },
    items : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginBottom : 20,
    },
    CompleteButton : {
        flexDirection : 'row',
        alignItems : 'center'


    },
    circle : {
        width: 22,
        height: 22,
        borderRadius : 22/2 ,
        borderWidth :2,
        marginRight : 15,
        
    },
    itemName : {
        fontWeight : 'bold',
        color : '#000',
        fontSize : 16

    },
    deleteButton : {
        alignItems : 'center'
    },
    deleteImage : {
        width : 25,
        height : 25,
    },
    ButtonContainer :{
        flexDirection : 'row'

    },
    UndoButton : {
        alignItems : 'center'
        ,marginRight : 20
    },
    UndoImage : {
        width : 25,
        height : 25,
    },
    InputContainer : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems :'center',
        marginTop : 30 ,

        

    },
    InputSection : {
        flexDirection : 'row',
        borderWidth : 1,
        borderTopLeftRadius : 8,
        borderBottomLeftRadius : 8,
        alignItems : 'center',
        paddingHorizontal : 15,
        flex:1,
        height : 45 ,
        borderColor : '#999',
        borderRightColor : '#fff'


    },
    add : {

    },
    Input : {

        marginHorizontal : 13,
        fontWeight : '500',
        fontSize :17,
        color : '#999'

    },
    InputSubmit : {
        backgroundColor : '#2196f3',
        paddingHorizontal : 18,
        height : 45,
        justifyContent : 'center',
        borderTopRightRadius : 8,
        borderBottomRightRadius : 8,
    },
    ButtonText : {
        color : '#fff',
        textAlign : 'center',
        
    },
    checkImage : {
        width : 20,
        height : 20,
        marginRight : 15
    }
    
})
