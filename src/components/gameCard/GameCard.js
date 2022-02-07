import React from "react";
import "./GameCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function GameCard({ id, game, url, theme }) {
    function openRepoinNewTab(url) {
        var win = window.open(url, "_self");
        win.focus();
    }

    const styles = style({
        color: "rgb(88, 96, 105)",
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
        padding: "2rem",
        cursor: "pointer",
        borderRadius: "5px",
        height: "100%",
        transition: "all 0.2s ease-in-out",
        ":hover": {
            boxShadow: `${theme.imageDark} 0 2px 15px`,
        },
    });

    return (
        <div>
            <Fade bottom duration={2000} distance="40px">
                <div
                    {...styles}
                    key={id}
                    onClick={() => openRepoinNewTab("game/" + url)}
                    style={{ backgroundColor: theme.projectCard }}
                >
                    <div className="game-name-div">
                        <p className="game-name" style={{ color: theme.text }}>
                            {game.name}
                        </p>
                    </div>
                    <p className="game-description" style={{ color: theme.text }}>
                        {game.description}
                    </p>

                </div>
            </Fade>
        </div>
    );
}
