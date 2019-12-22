const Comment = require('../model/Comment')
const User = require('../../users/model/User')

module.exports = {
    createComment: (params)=>{

        // identify the user for which toto is created.
       

        return new Promise((resolve, reject) => {
            let newComment = new Comment({
                comment: params.newComment
            })
            newComment.save()
                    .then(createComment => {
                        resolve(createComment)
                    })
                    .catch(error => {
                        let errObj = {};
                        errObj.status = 400;
                        errObj.message = error 
                        reject(errObj)
                    })
        })
    },

    getAllComments: async (req, res) => {

            try {
              let allComments = await Comment.find({})
              
              res.status(200).json(allComments);                 
        
            } catch (error) {
              console.log(error);
              res.status(500).json(error);
            }
        
        
          },

    // getList: (id)=>{
    //     return new Promise((resolve, reject) => {
    //         User.findById({_id:id}, 'comment email')
    //             .populate('comment', '-user_id -__v' )
    //             .exec((err, user) => {
    //                 if (err){
    //                     reject(err)
    //                 }else {
    //                     console.log(user)
    //                     resolve(user)
    //                 }
    //             })
                
    //     })
    //  },

     deleteCommentById: (id) =>{
       return new Promise((resolve, reject) => {
        Comment.findByIdAndDelete({_id:id })
            .then(deleted => {
                resolve(deleted)
            })
            
            .catch(error => {
                        let errorsObj = {}
                        errorsObj.message = error
                        errorsObj.status = 400

                        reject(errorsObj)
                    })
        })
    },

    
    updateCommentById: (id, params) =>{
        return new Promise((resolve, reject) => {
            Comment.findByIdAndUpdate(id,  params, {new: true} )
            .then(newComment => {
                resolve(newComment)
            })
            
            .catch(error => {
                        let errorsObj = {}
                        errorsObj.message = error
                        errorsObj.status = 400

                        reject(errorsObj)
                    })
        });
    }

}