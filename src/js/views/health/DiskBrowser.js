import React, {Component} from 'react';
import {Segment, Label,Button,Icon,List} from "semantic-ui-react";
import Disk from "./sub-components/Disk";

const first = 0;
const last = 6;
const jump = last;

class DiskBrowser extends Component{

    constructor(){
        super();
        this.state = {
            start: first,
            current:1,
            end:last
        }
    }

    nextPage(){
        this.setState({
            start:this.state.start+jump,
            current:this.state.current+1,
            end:this.state.end+jump,
        })
    }

    previousPage(){
        if(this.state.current > 1)
        {
            this.setState({
                start:this.state.start-jump,
                current:this.state.current-1,
                end:this.state.end-jump,
            })
        }
    }

    fileList = [
        {
            id:0,
            name:'1 WDC WD7500BPVX-22JC3T0',
            sno:'WD-WX51E43ZZU78',
            mtype:'HDD',
            opStat:'Degraded',
            hStat:'Warning',
            usage:'Auto-Select',
            size:'28.88 GB'
        },
        {
            id:1,
            name:'2 WD7500BPVX-22JC3T0',
            sno:'WD-WX51E43ZZU78',
            mtype:'HDD 2',
            opStat:'OK',
            hStat:'Healthy',
            usage:'Auto-Select',
            size:'12.75 GB'
        },
        {
            id:2,
            name:'3 WDC WD7500BPVX-22JC3T0',
            sno:'WD-WX51E43ZZU78',
            mtype:'HDD',
            opStat:'Detached',
            hStat:'Unknown',
            usage:'Auto-Select',
            size:'6.32 GB'
        },
        {
            id:3,
            name:'4 WDC WD7500BPVX-22JC3T0',
            sno:'WD-WX51E43ZZU78',
            mtype:'HDD',
            opStat:'OK',
            hStat:'Healthy',
            usage:'Auto-Select',
            size:'28.65 GB'
        },
        {
            id:4,
            name:'5 WDC WD7500BPVX-22JC3T0',
            sno:'WD-WX51E43ZZU78',
            mtype:'HDD',
            opStat:'OK',
            hStat:'Healthy',
            usage:'Auto-Select',
            size:'13.74 GB'
        },
        {
            id:5,
            name:'6 WDC WD7500BPVX-22JC3T0',
            sno:'WD-WX51E43ZZU78',
            mtype:'HDD',
            opStat:'OK',
            hStat:'Healthy',
            usage:'Auto-Select',
            size:'14.86 GB'
        },
        {
            id:6,
            name:'7 WDC WD7500BPVX-22JC3T0',
            sno:'WD-WX51E43ZZU78',
            mtype:'HDD',
            opStat:'OK',
            hStat:'Healthy',
            usage:'Auto-Select',
            size:'23.76 GB'
        },
        {
            id:7,
            name:'8 WDC WD7500BPVX-22JC3T0',
            sno:'WD-WX51E43ZZU78',
            mtype:'HDD',
            opStat:'OK',
            hStat:'Healthy',
            usage:'Auto-Select',
            size:'29.44 GB'
        }
    ];


    render(){
        return(
            <Segment>
                <Label attached='top'>Disk List</Label>

                <List divided>
                    {
                        this.fileList.slice(this.state.start,this.state.end).map((file,i)=>{
                            return <Disk data={file} key={i} viewHandler={this.props.diskClickHandler}/>;
                        })
                    }
                    <Button.Group icon size='mini'>
                        <Button onClick={() => this.previousPage()}><Icon name='arrow left'/></Button>
                        <Button >{this.state.current}</Button>
                        <Button onClick={() => this.nextPage()}><Icon name='arrow right'/></Button>
                    </Button.Group>
                </List>
            </Segment>
        )
    }
}

export default DiskBrowser;