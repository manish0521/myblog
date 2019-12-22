var express = require('express');
var router = express.Router();

let commentController = require('./controller/commentController')

/* GET home page. */
// router.get('/get-all-comments', function(req, res, next) {
//     const id = req.query.id;

// commentController.getList(id)
//                 .then(list =>{
                
//                   res.json(list)
//                 })
//                 .catch(error =>{
//                     res.json(error)
//                 })
// });

router.get('/get-all-comments', commentController.getAllComments);

router.post('/create-new-comment', (req,res)=>{
    commentController.createComment(req.body)
                  .then(createComment =>{
                    res.json(createComment)
                  })
                  .catch(error => {
                    res.json(error) 
                  })
  });

  router.delete('/delete-by-id/:id', (req, res) => {
            
    const id = req.params.id;

    commentController.deleteCommentById(id)
                    .then(deleted =>{
                                
                        res.json(deleted)
                    })
                    .catch(error =>{
                        res.json(error);
                    })

  });

  router.put('/update-comment-by-id/:id', (req, res) => {

    const id = req.params.id;
    const newComment = req.body;

    commentController.updateCommentById(id, newComment)
                    .then(newComment =>{
                                            
                        res.json(newComment)
                    })
                    .catch(error =>{
                        res.json(error);
                    })

  })




module.exports = router;
