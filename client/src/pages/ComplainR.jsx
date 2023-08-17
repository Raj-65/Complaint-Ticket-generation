import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

   

function ComplainR() {
    let { id } = useParams();
    const [reqquestObject, setReqquestObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({
      AssignedTo:"",
      Remarks:"",
      InventoryUsed:""
    });
    

    useEffect(() => {
      axios.get(`http://localhost:3001/requests/byId/${id}`).then((response) => {
        setReqquestObject(response.data);
        console.log(response.data);
      });
      axios.get(`http://localhost:3001/reqown/${id}`).then((response) => {
        setComments(response.data);
      });
    }, [id]);
   

    const addComment = () => {
      axios.post("http://localhost:3001/reqown", {
          AssignedTo: newComment.AssignedTo,
          Remarks: newComment.Remarks,
          InventoryUsed: newComment.InventoryUsed,
          ReqId: id,
        })
        .then((response) => {
          const commentToAdd = {
             AssignedTo: newComment.AssignedTo,
             Remarks: newComment.Remarks,
             InventoryUsed: newComment.InventoryUsed
           };
          setComments([...comments, commentToAdd]);
          setNewComment({AssignedTo:"",
          Remarks:"",
          InventoryUsed:""});
        }).catch(err =>{
         console.log(err);
        });
    };

    function handleChange(event) {
      const { name, value } = event.target;
    
      setNewComment((prevValue) => {
        return { ...prevValue, [name]: value };
      });
    }
    const complete = () =>{
      axios.post("http://localhost:3001/reqsolv", {
        IsComplete:"DONE",
        Name:reqquestObject.Name,
        email:reqquestObject.email,
        Requirement:reqquestObject.Requirement,
        Department:reqquestObject.Department,
        registered:reqquestObject.createdAt,
        AssignedTo: comments[0].AssignedTo,
        Remarks: comments[0].Remarks,
        InventoryUsed: comments[0].InventoryUsed,
        ReqId: id,
      }).then((response) => {
        console.log("Complain Resolved!");
        alert("Ok!");
      })
    }
    const deleteComment = (id) => {
      axios.delete(`http://localhost:3001/reqown/${id}`, {
        })
        .then(() => {
          setComments(
            comments.filter((val) => {
              return val.id !== id;
            })
          );
        });
    };

  return ( 
    <div className="complainPage">
    <div className="leftSide">
        <div className="complain" id="individual">
        <div className="title"> <span className="top">{reqquestObject.id}</span>{reqquestObject.Name} </div>
        <div className="title"> {reqquestObject.email}</div>
        <div className="body"> {reqquestObject.Requirement}</div>
        <div className="footer"><span id="placeholder">Dept:</span> {reqquestObject.Department}</div>
        <div className="footer"><span id="placeholder">Registered at:</span> {reqquestObject.createdAt}</div>
     
        </div>
      </div>
      <div className="rightSide">
      <div className="addCommentContainer">
          <input
            type="text"
            name="AssignedTo"
            placeholder="Assign To..."
            autoComplete="off"
            value={newComment.AssignedTo}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Remarks"
            placeholder="Remarks..."
            autoComplete="off"
            value={newComment.Remarks}
            onChange={handleChange}
          />
          <input
            name="InventoryUsed"
            type="text"
            placeholder="Inventory Used..."
            autoComplete="off"
            value={newComment.InventoryUsed}
            onChange={handleChange}
          />
          <button onClick={addComment} > Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
               <p className="assign"><span id="placeholder" >Assigned To:</span> {comment.AssignedTo}</p>
               <p className="assign"><span id="placeholder" >Remarks:</span> {comment.Remarks}</p>
               <p className="assign"><span id="placeholder" >Inventory used:</span>{comment.InventoryUsed}</p>
               {/* <i onClick={() => {
                      deleteComment(comment.id);
                    }} className="fa-sharp fa-solid fa-trash" style={{position:"relative", left:"90%"}}></i> */}
              </div>
            );
          })}
        </div>
       <button className="comp" onClick={complete}>Mark as Complete!</button>
      </div>
  </div>
  )
}

export default ComplainR
