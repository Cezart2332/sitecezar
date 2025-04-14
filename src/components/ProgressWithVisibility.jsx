import React from "react";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "./ChangingProgressProvider"; // ai deja asta
import { Box } from "@chakra-ui/react";
import "./progressCircular.css"

const ProgressWithVisibility = ({ values }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <Box ref={ref} width="175px">
            {inView && (
                <ChangingProgressProvider values={values}>
                    {percentage => (
                        <CircularProgressbar className="custom-text" styles={buildStyles({textColor: '#00fff7',pathColor:"#00e4ff", trailColor: '#b4b4b4', strokeLinecap: 'round',textSize: '20px',pathTransitionDuration: 0.5})} value={percentage} text={`${percentage}%`} />

                    )}
                </ChangingProgressProvider>
            )}
        </Box>
    );
};

export default ProgressWithVisibility;
