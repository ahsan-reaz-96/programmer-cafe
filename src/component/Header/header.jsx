
import profile from '../../assets/images/profile.png'

const header = () => {
    return (
        <div className='flex justify-between items-center p-4 border-b-4 max-w-7xl mx-auto'>
            <h1 className='font-extrabold text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt=""  />
      
            
            
        </div>
    );
};

export default header;