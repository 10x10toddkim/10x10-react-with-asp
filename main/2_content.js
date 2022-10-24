const mainContentStyles = {
    container: {
        width: '100%',
        height: 2000,
        backgroundColor: 'lightyellow',
    },
    stickyHeader: {
        position: 'sticky',
        top: 0,
    }
}

const StickyContainer = () => {
    return (
        <div style={mainContentStyles.container}>
            <h3 style={mainContentStyles.stickyHeader}>sticky header</h3>
        </div>
    );
};

const targetElement = document.getElementById('page-main-section-content');
ReactDOM.render(<StickyContainer />, targetElement);
