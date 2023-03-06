

const EmployeeManagement = () => {
    return(
       
  <div class="container">
    <h2>This is a CRUD application built using ReactJS and Material-UI that allows users to manage employee data. My name is Mohammed Zakria Khan, and I am a Software Engineer at LTIMindtree.</h2>
    <h3>The application allows users to perform the following operations:</h3>
    <ul>
      <li>Create new employees by entering their name, username, email, and phone number.</li>
      <li>Read the list of all employees with their details.</li>
      <li>Update employee details by selecting the employee to edit and modifying their details.</li>
      <li>Delete an employee from the system by selecting the employee and confirming deletion.</li>
    </ul>

    <h3>The main components of the application include:</h3>
    <ul>
      <li>NavBar: A component that displays a navigation menu with links to the different views in the application.</li>
      <li>AddEmployee: A form component that allows users to enter details for a new employee and submit the data to be saved to the server.</li>
      <li>EmployeeList: A component that displays a table of all employees in the system with their details, and provides buttons to edit or delete each employee.</li>
      <li>EditEmployee: A form component that allows users to modify the details of an existing employee and submit the changes to be saved to the server.</li>
      <li>DeleteEmployee: A confirmation dialog component that prompts the user to confirm deletion of an employee from the system.</li>
    </ul>

    <h3>The application uses JSON-Server, a fake REST API backend that provides a full fake REST API with zero coding in less than 30 seconds, to store and retrieve employee data.</h3>

    <p>The application follows a modern, responsive design using Material-UI components and styles. The UI is intuitive and easy to use, with clear labels and feedback messages to guide the user through the different operations.</p>

    <p>Overall, the Employee Management System is a fully functional CRUD application built using ReactJS and Material-UI that provides an easy-to-use interface for managing employee data.</p>
  </div>


    )
}

export default EmployeeManagement;



