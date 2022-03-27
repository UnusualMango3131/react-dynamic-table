import './App.css';
import React from "react";

const data = [
    {
        id: "0",
        name: "John",
        secondName: "Doe"
    },
    {
        id: "1",
        name: "Sam",
    },
    {
        id: "2",
        name: "Jerry",
        address: "NY"
    },
    {
        id: "3",
        name: "Joel",
        secondName: "Martinez",
        job: "software-engineer"
    }
];

function ExampleTable(props) {
    const data = props.data;
    let objectsWithAllExistingKeys = [];
    let allKeys = [];

    data.forEach((object) => {
        const objectKeys = Object.keys(object);

        objectKeys.forEach((objectKey) => {
            if (allKeys.indexOf(objectKey) === -1) {
                allKeys.push(objectKey);
            }
        });
    });

    data.forEach((object) => {
        let objectWithAllKeys = {};
        let keys = Object.keys(object);

        allKeys.forEach((key) => {
            objectWithAllKeys[key] = object[key] ? object[key] : "-"
        });

        objectsWithAllExistingKeys.push(objectWithAllKeys);
    });

    return (
        <table>
            <ExampleHead data={allKeys} />
            <ExampleBody data={objectsWithAllExistingKeys}/>
        </table>
    )
}

function ExampleHead(props) {
    let dataForTableHead = props.data;

    return (
        <thead>
            {dataForTableHead.map((key) => {
                return (
                    <th className={'example__table-column'}>{key}</th>
                )
            })}
        </thead>
    )
}

function ExampleBody(props) {
    let dataForTableBody = props.data;

    return dataForTableBody.map((data) => {
        let values = Object.values(data);

        return (
            <tbody>
                {values.map(value =>
                    <th className={'example__table-column'}>
                        {value}
                    </th>
                )}
            </tbody>
        )
    });
}

function App() {
  return (
      <div className={'example__container'}>
          <ExampleTable data={data}/>
      </div>
  );
}

export default App;
