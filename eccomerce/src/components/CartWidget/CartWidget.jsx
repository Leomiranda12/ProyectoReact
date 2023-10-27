import { Avatar, Badge, Space } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons'; 
const CartWidget = () => {
    return(
        <>
            <Badge count={18}>
                <Avatar shape="square" size="large" icon = {<ShoppingCartOutlined />}/>
            </Badge>

        </>
    )
}

export default CartWidget