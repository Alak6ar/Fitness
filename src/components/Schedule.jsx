import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SCHEDULE_URL = "http://alihuseyn1-001-site1.otempurl.com/api/Schedule";
const CLASSES_URL = "http://alihuseyn1-001-site1.otempurl.com/api/Classes";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Schedule verisini çek
    fetch(SCHEDULE_URL)
      .then((response) => response.json())
      .then((data) => setSchedule(data))
      .catch((error) => console.error("Hata:", error));

    // Classes verisini çek
    fetch(CLASSES_URL)
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error("Hata:", error));
  }, []);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Schedule'daki className ile Classes'daki name eşleşmesini yap
  const findMatchingClassId = (className) => {
    const matchedClass = classes.find((cls) => cls.name === className);
    return matchedClass ? matchedClass.id : null;
  };

  return (
    <div className="schedule-section">
      <div className="vc_custom_1496654109388">
        <div className="container">
          <div className="wpb_wrapper">
            <div className="wpb_text_column wpb_content_element vc_custom_1496654212061">
              <h2>CLASS SCHEDULE</h2>
            </div>
            <div className="table-responsive rt-routine rt-dark">
              <table className="tab-content">
                <thead>
                  <tr>
                    <th></th>
                    {days.map((day, index) => (
                      <th key={index} className="rt-col-title">
                        <div>{day}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item) => {
                    const matchedClassId = findMatchingClassId(item.className);

                    return (
                      <tr key={item.id}>
                        <th className="rt-row-title">{item.startTime}</th>
                        {days.map((day, index) => (
                          <td key={index}>
                            {item.dayOfWeek === index + 1 && matchedClassId && (
                              <Link className="rt-item" to={`/classes/${matchedClassId}`}>
                                <div className="rt-item-title">{item.className}</div>
                                <div className="rt-item-time">
                                  <span>{item.startTime}</span> - <span>{item.endTime}</span>
                                </div>
                              </Link>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
