// This will define the data structure of a driver
interface Driver {
  name: string;
  age: number;
}

// In order to make the Driver interface available for use in other files
// you have to export the interface
// Add "export" keyword so that the interface will be available to other files
export { Driver };
