import PropTypes from 'prop-types';
const BooksMark = ({booksMark}) => {
    const {title} = booksMark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h3 className='text-3xl'> {title}</h3>
        </div>
    );
};
BooksMark.propTypes ={
    booksMark : PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func
}
export default BooksMark;
