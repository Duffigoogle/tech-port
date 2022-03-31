import { GetServerSidePropsContext } from "next"
import { items } from '../data';
import { IService } from '../type';
import ItemCard from "./ItemCard";

const About = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 dark:bg-dark-200">
      <h5 className="px-5 my-3 font-medium">
      I am currently a Frontend Engineer. I have 3+ years of experience in web development and I tutor as a Frontend Developer and also love building digital products. Also, an ardent Web3 enthusiast.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark style={{marginLeft: '-1.5rem', marginRight: '-1.5rem' }}">
        <h4 className="my-3 text-xl font-bold tracking-wide">What I offer</h4>
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map(item => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200">
              <ItemCard item={item} />
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default About


// export const getServerSideProps = async(
//   context: GetServerSidePropsContext 
//   ) => {
//     const res = await fetch("https://http://localhost:3001/api/services");
//     const data = await res.json();

//     console.log("SERVER", items);

//     return {
//       props: {
//         items: data.items
//       }
//     }
// } 

