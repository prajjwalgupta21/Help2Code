import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const Templete = ({ value}) => {
    const [content, SetContent] = useState([]);
    let disposed = false;
    useEffect(() => {
        (async () => {
            fetch(`https://kontests.net/api/v1/${value}`)
                .then((response) => response.json())
                .then((result) => {
                    SetContent(result);
                })
        })()
        return () => disposed = true
        // eslint-disable-next-line
    },[disposed]);
    return (
        <>
        <Paper elevation={3} className="paper">
            {content.length > 0 ?
                (
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Contest</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Time</TableCell>
                                    <TableCell align="center">Duration</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {content.map((c) => (
                                    (c.status !== "CODING") &&
                                    <TableRow>
                                        <TableCell align="center"><a href={c.url}>{c.name}</a></TableCell>
                                        <TableCell align="center">{c.start_time.substr(0,10)}</TableCell>
                                        <TableCell align="center">{c.start_time.substr(11,5)}</TableCell>
                                        <TableCell align="center">
                                            {
                                                (c.duration%3600)===0?`${c.duration/3600}hr`:`${parseInt(c.duration/3600)}hr ${ parseInt((c.duration % 3600) / 60)}min`
                                            }
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <div className="nocontest">No Upcoming Contest</div>
                )
            }
        </Paper>
        <p className="create">Copyright © 2022</p>
        </>
    )
}

export default Templete
