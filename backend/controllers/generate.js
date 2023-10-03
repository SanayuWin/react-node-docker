const db = require('../config/db');

exports.resetData = (req, res) => {
    const type = 'random';

    const query = 'SELECT datas FROM public."group" WHERE types = $1 LIMIT 1';

    db.oneOrNone(query, [type])
        .then((data) => {
            if (data) {
                // Send the data as a JSON response
                const num = data.datas;
                res.json({ message: 'success', data: num });
            } else {
                res.status(404).json({ message: 'Data not found' });
            }
        })
        .catch((error) => {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ message: 'Internal server error' });
        });

}

exports.previewTable = (req, res) => {
    // Define your SQL query to select all rows from the 'graphic' table
    // const start = 1;
    // const end = 7;

    // // Define your SQL query to select rows where 'num' is within the specified range
    // const query = 'SELECT * FROM graphic WHERE num >= $1 AND num <= $2';

    // // Execute the query using the database connection
    // db.any(query, [start, end])
    //     .then((data) => {
    //         // Send the data as a JSON response
    //         res.json({ message: 'success', data: data });
    //     })
    //     .catch((error) => {
    //         console.error('Error executing SQL query:', error);
    //         res.status(500).json({ message: 'Internal server error' });
    //     });
    
    // Define your SQL query to select all rows from the 'graphic' table
    const query = 'SELECT * FROM graphic';

    // Execute the query using the database connection
    db.any(query)
        .then((data) => {
            // Send the data as a JSON response
            res.json({ message: 'success', data: data });
        })
        .catch((error) => {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
}