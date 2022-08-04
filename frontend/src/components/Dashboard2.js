import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid } from "@mui/material";

import { Bar } from "react-chartjs-2";
import "./Dashboard2.css";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const [qtyData, setQtyData] = useState({});
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [addShowLoading, setAddShowLoading] = useState(false);
  const [addShowData, setAddShowData] = useState(null)
  const [viewsLoading, setViewsLoading] = useState(false);
  const [ratingsLoading, setRatingsLoading] = useState(false)
   const [viewsData, setViewsData] = useState({})
  //  const [reviewsData, setReviewsData] = useState({})

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [54, 12, 87, 90, 34],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [87, 23, 546, 3, 46, 5],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const extractData = (data, labelfield, datafield) => {
    const result = { labels: [], data: [] };
    data.map((item) => {
      result.labels.push(item[labelfield]);
      result.data.push(item[datafield]);
    });
    console.log(result);
    return result;
  };

  const loadviewshowdata = () => {
    setViewsLoading(true);
    fetch("http://localhost:5000/shows/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setAddShowLoading(false)
          setAddShowData(data)

          setQtyData(extractData(data, "title", "views"));
        });
      }
    });
  };

  useEffect(() => {
    loadviewshowdata();
  }, []);
   
  const displayShowChart = () => {
    if (!viewsLoading) {
      return <Bar data={{}} />;
    }
  };
  const displayviewsChart = () => {
    if (!viewsLoading) {
      return (
        <Bar
          style={{ height: "100%", width: "100%" }}
          data={{
            labels: viewsData.labels,
            datasets: [
              {
                label: "views",
                data: viewsData.data,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
      );
    }
  };

  const loadaddshowData = () => {
    setAddShowLoading(true);
    fetch("http://localhost:5000/shows/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setAddShowLoading(false)
          setAddShowData(data)

          setQtyData(extractData(data, "title", "reviews"));
        });
      }
    });
  };
  useEffect(() => {
    loadaddshowData();
  }, []);
  const displayQtyChart = () => {
    if (!reviewsLoading) {
      return (
        <Bar
          style={{ height: "100%", width: "100%" }}
          data={{
            labels: qtyData.labels,
            datasets: [
              {
                label: "Reviews",
                data: qtyData.data,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
      );
    }
  };

  return (
    <div>
      {/* <Bar  data={data} />; */}

      {/* <header>
        <div className="container">
          <h1 className="text-center">Your Realtime Dashboard</h1>
        </div>
      </header>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mt-4">
            <div className="card chart-cont">
              <div className="card-header">
                <h4>Product Quantity</h4>
              </div>
              <div className="card-body">{displayQtyChart()}</div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card chart-cont">
              <div className="card-header">
                <h4>Product Quantity</h4>
              </div>
              <div className="card-body">{displayQtyChart()}</div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card chart-cont">
              <div className="card-header">
                <h4>Product Quantity</h4>
              </div>
              <div className="card-body">{displayQtyChart()}</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md mt-4">
            <div className="card chart-cont">
              <div className="card-header">
                <h4>Product Quantity</h4>
              </div>
              <div className="card-body">{displayQtyChart()}</div>
            </div>
          </div>
          <div className="col-md mt-4">
            <div className="card chart-cont">
              <div className="card-header">
                <h4>Product Quantity</h4>
              </div>
              <div className="card-body">{displayQtyChart()}</div>
              <div className="card-body">{displayviewsChart()}</div>
            </div>
          </div>
        </div>
        
        </div> */}

      <div>
        <div class="card sm-6 md-6 text-center mt-2 " id="apple">
          Your Dashboard
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mt-4">
            <div className="card chart-cont">
              <div className="card-header">
                <h4>Reviews Chart</h4>
              </div>
              <div className="card-body">{displayQtyChart()}</div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card chart-cont">
              <div className="card-header">
                <h4>Views Chart</h4>
              </div>
              <div className="card-body">{displayviewsChart()}</div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card chart-cont">
              <div className="card-header">
                <h4>views Chart</h4>
              </div>
              <div className="card-body">{displayQtyChart()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
