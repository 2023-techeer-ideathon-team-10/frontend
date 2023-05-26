import React from "react";
import ListComponent from "../../components/list/listcomponent/listcomponent";
import Title from "../../components/list/title/title";
import './list.scss'

const List = () => {
    return(
        <div className="listPageLayout" >
          <Title/>
          <ListComponent/>
        </div>
    )
}
export default List