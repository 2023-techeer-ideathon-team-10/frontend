// eslint-disable-next-line no-unused-vars
import React from "react";
import ListComponent from "../../commponents/list/listcomponent/listcomponent";
import Title from "../../commponents/list/title";
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