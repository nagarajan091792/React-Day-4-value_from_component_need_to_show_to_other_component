import Card from "./card"
function Dashboard () {
    var cardDeatils = [
        {
            plan : "Earnings (Monthly)",
            price : "$40,000",
            icon : "fas fa-calendar fa-2x text-gray-300"
        },
        {
            plan : "Earnings (Annual)",
            price : "$215,000",
            icon : "fas fa-dollar-sign fa-2x text-gray-300"
        },
            {
                plan : "Tasks",
                price : "50%",
                icon : "fas fa-clipboard-list fa-2x text-gray-300"
            },
            {
                plan : "Pending Requests",
                price : "18",
                icon : "fas fa-comments fa-2x text-gray-300"
            }
       
    ]
    return(
        <div class="container-fluid">

        
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        
        <div class="row">
        {cardDeatils.map((item) => {
            return <Card item={item}></Card>;
          })}
        </div>
        </div>
        )
}
export default Dashboard