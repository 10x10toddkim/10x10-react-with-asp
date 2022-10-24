const eventItemListStyles = {
    ul: {
      listStyle: 'none',
      paddingLeft: 0,
    },
    li: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 40,
        backgroundColor: 'rgb(243, 160, 86)',
        marginBottom: 10,
    },
};

const ItemList = (props) => {
    return (
        <>
            <ul id="base-item-list" style={eventItemListStyles.ul}>
                {props.items.map((item, index) => (
                    <li key={`item-index-number-${index}`} style={eventItemListStyles.li}>{item}</li>
                ))}
            </ul>
        </>
    );
};

const targetElement = document.getElementById('page-event-section-item-list');
const baseItems = [
    "Sweatshirt",
    "Hooded T-shirt",
    "Half zip-up",
    "Hat & ETC",
];
ReactDOM.render(<ItemList items={baseItems} />, targetElement);
