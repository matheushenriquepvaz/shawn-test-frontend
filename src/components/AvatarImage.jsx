

function AvatarImage({imageUrl, size}) {
  return (
    <img src={imageUrl} className={ size }/>
  )
}

export default AvatarImage