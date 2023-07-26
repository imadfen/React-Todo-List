import React from 'react'

function TabHead({tab, handleSetTab}) {
    return (
        <div className="tabs-container">
            <div className="tab-selector" onClick={() => handleSetTab(0)}>
                <p>All</p>
                <div className={`underline ${tab == 0 ? "blue" : ""}`}></div>
            </div>
            <div className="tab-selector" onClick={() => handleSetTab(1)}>
                <p>Active</p>
                <div className={`underline ${tab == 1 ? "blue" : ""}`}></div>
            </div>
            <div className="tab-selector" onClick={() => handleSetTab(2)}>
                <p>Completed</p>
                <div className={`underline ${tab == 2 ? "blue" : ""}`}></div>
            </div>
        </div>
    )
}

export default TabHead