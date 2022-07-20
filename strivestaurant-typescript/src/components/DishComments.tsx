import ListGroup from "react-bootstrap/ListGroup"
import { Pasta } from "../types/IPasta"

interface DishCommentsProps {
  selectedDish: Pasta
}

const DishComments = ({ selectedDish }: DishCommentsProps) => {
  return <ListGroup>{selectedDish ? selectedDish.comments.map((c) => <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>) : <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>}</ListGroup>
}
export default DishComments
