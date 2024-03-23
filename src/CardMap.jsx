import PropTypes from 'prop-types';
import Card from "./Cards";


function CardMap({ data, val }) {
  return (
    <>
      {data
        .filter((ele) => ele.content === val)
        .map((ele) => (
          <Card key={ele.id} data={ele} />
        ))}
    </>
  );
}
CardMap.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired, // Assuming id is a number
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        
      })
    ).isRequired,
    val: PropTypes.string.isRequired,
  };

export default CardMap;