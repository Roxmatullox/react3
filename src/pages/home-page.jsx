import { Component, Fragment } from 'react'
import Form1 from '../components/form/form'
import { Tab, Tabs } from 'react-bootstrap'
import Card1 from '../components/card/card'
import { v4 } from 'uuid'



class HomePage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      rend : JSON.parse(localStorage.getItem("rend")) ||[
        {
          firstName : "Noza",
          lastName : ".lv",
          categories : "Friends",
          phoneNumber : "+9989025578",
          favourite:true,
          id:1
        },
        {
          firstName : "Roxmatulloh",
          lastName : ".lv",
          categories : "Friends",
          phoneNumber : "+9989025578",
          favourite:false,
          id:2,
        },
        {
          firstName : "Muslixiddin",
          lastName : ".lv",
          categories : "Friends",
          phoneNumber : "+9989025578",
          favourite: true,
          id:3,
        },
      ],

      todo : {
        firstName:"",
        lastName : "",
        categories: "Other",
        phoneNumber: "",
        done:false,
        id: v4()
      }
    }
  }
  render() {
    const {rend , todo} = this.state

    const returnText = (e) =>{
      this.setState({ todo :{...todo , [e.target.id] : e.target.value}})
    }

    const addToFavourite = (id) =>{
      let r = rend.map((el)=>{
        if (el.id == id) {
          el.favourite = true
          console.log(el);
        }
        return el
      })
      localStorage.setItem("rend" , JSON.stringify(r))

      this.setState({rend:r})
    }

    const delete1 = (id)=>{
      let r = rend.filter((el)=>el.id != id)
      localStorage.setItem("rend" , JSON.stringify(r))
      this.setState({rend:r})
    }

    const submit = (e) =>{
      e.preventDefault()
      let r = [...rend , todo]
      localStorage.setItem("rend" , JSON.stringify(r))
      this.setState({rend:r,todo : {
        firstName:"",
        lastName : "",
        categories: "Other",
        phoneNumber: ""
      }})
    }

    const favourites = rend.filter((el)=>el.favourite)

    return (
      <Fragment>
        <Form1 todo={todo} returnText={returnText} submit={submit} />
        <div className="container">
          <Tabs
            defaultActiveKey="all"
            id="justify-tab-example"
            className="mb-3"
            justify
            variant='pills'
          >
            <Tab eventKey="all" title="All">
              {rend.map((el,i)=>(
                <Card1 delete1={delete1} addToFavourite={addToFavourite} key={i} {...el} />
              ))}
            </Tab>
            <Tab eventKey="favourites" title="Favourites">
              {favourites.map((el ,i)=>(
                <Card1 delete1={delete1} key={i} {...el} />
              ))}
            </Tab>
          </Tabs>
        </div>
      </Fragment>
    )
  }
}

export default HomePage