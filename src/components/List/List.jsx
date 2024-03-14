/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import ImageNext from '../Image/ImageNext';
import listStyle from './List.module.scss';

const List = ({ arrayList, listStyleType, listType, variant }) => {
  const styles = {
    listStyle: {
      'list-style-type': listStyleType,
    },
  };

  const renderSwitch = () => {
    switch (listType) {
      case 'normal':
        return arrayList.map(element => <li>{element}</li>);
      case 'teaser':
        return arrayList.map((element, idx) => (
          <li className={listStyle.teaser} key={`teaser_${idx}`}>
            <a href={element.href}>
              <div>
                {element.img !== undefined && <ImageNext imagePath={element.img} altText={element.altText} />}
                {element.title !== undefined && <div className={listStyle['teaser-title']}>{element.title}</div>}
                {element.description !== undefined && (
                  <div className={listStyle['teaser-description']}>{element.description}</div>
                )}
              </div>
            </a>
          </li>
        ));
      default:
        return <p>Please provide correct config</p>;
    }
  };

  return (
    <ul style={styles.listStyle} className={`${listStyle.list} ${variant}`}>
      {renderSwitch()}
    </ul>
  );
};

List.propTypes = {
  arrayList: PropTypes.object.isRequired,
  listStyleType: PropTypes.string,
  listType: PropTypes.string,
  variant: PropTypes.string,
};

List.defaultProps = {
  listStyleType: 'none',
  listType: 'normal',
  variant: '',
};

export default List;
