import React from 'react'

function TabHead({tab, hadnleSetTab}) {
    return (
        <div className="tabs-container">
            <div className="tab-selector" onClick={() => hadnleSetTab(0)}>
                <p>All</p>
                <div className={`underline ${tab == 0 ? "blue" : ""}`}></div>
            </div>
            <div className="tab-selector" onClick={() => hadnleSetTab(1)}>
                <p>Active</p>
                <div className={`underline ${tab == 1 ? "blue" : ""}`}></div>
            </div>
            <div className="tab-selector" onClick={() => hadnleSetTab(2)}>
                <p>Completed</p>
                <div className={`underline ${tab == 2 ? "blue" : ""}`}></div>
            </div>
        </div>
    )
}

export default TabHead