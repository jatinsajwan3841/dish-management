import React from 'react';
import { useSelector } from "react-redux";
import MenuAppBar from './topbar'
import DishCard from './card'
import Container from '@material-ui/core/Container'

export default function User() {
  const [search,setsearch] = React.useState([])

  const dishlist = useSelector(state => state.dishlist);
  
  const handleChange = (e) =>{
    var tmp = ''
    tmp = dishlist.filter((t) => t.dname == e.target.value)
    if (tmp !== '') setsearch(tmp)
    else setsearch([])
  }

  return (<>

      <MenuAppBar dishlist={dishlist} hc={handleChange}/>
      <Container style={{display: 'flex', flexWrap: "wrap"}}>
       {search.length == 0 ? 
       dishlist.map( (dish) => (
        <DishCard dish={dish}/>
      )
      )
         :
         search.map( (dish) => (
          <DishCard dish={dish}/>
        )
        )
        } 
        
      </Container>
      </>
  );
}
