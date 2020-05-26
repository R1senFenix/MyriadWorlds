import React from "react";

const libraryTestList = [
    {
        RulesName: "Custom Test",
        Viewable: true

    }
]
function LibraryDrop(props) {
    const LibraryDropup = libraryTestList.map((libraryTestList) => {
        if (libraryTestList.Viewable === true) {
            return (<option className="library-select">{libraryTestList.RulesName}</option>)
        }
    });
    return (<div>
        <select name="library-list" >{LibraryDropup}</select>
    </div>)
}
export default LibraryDrop;