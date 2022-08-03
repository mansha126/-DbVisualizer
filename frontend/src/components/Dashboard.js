
import { Bar } from 'react-chartjs-2';


import { useEffect, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Dashboard = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const [qtyData, setQtyData] = useState({});
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [addShowLoading, setAddShowLoading] = useState(false)
  

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [54, 12, 87, 90, 34],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [87, 23, 546, 3, 46, 5],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const extractData = (data, labelfield, datafield) => {
    const result = {labels : [], data : []}
    data.map((item) => {
      result.labels.push(item[labelfield]);
      result.data.push(item[datafield]);
    }
    )
    console.log(result);
    return result
  }

  const loadaddshowData = () => {
    setAddShowLoading(true)
    fetch("http://localhost:5000/shows/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data)
          // setProductLoading(false)
          // setProductData(data)

          setQtyData(extractData(data, "title", "reviews"))

        })
      }
    })
  }
  useEffect(() => {
    loadaddshowData()
  }, [])
  const displayQtyChart = () => {
    if (!reviewsLoading) {
      return <Bar data={
        {
          labels : qtyData.labels,
          datasets: [
            {
              label: "Quantity",
              data: qtyData.data,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }
      } />
    }
  }
  return <div>
    {/* <Bar  data={data} />; */}
    {displayQtyChart()}
    header
  </div>;
};

export default Dashboard;
