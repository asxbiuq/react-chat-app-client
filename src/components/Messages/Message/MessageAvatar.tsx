interface Props {
  name: string
}

export default ({name}:Props) => (
  <>
  <div className='flex flex-col gap-1 justify-center items-center'>
    <div className='userName text-sm'>
      {name}
    </div>
    <div className='userAvatar'>
    <div className="avatar placeholder">
      <div className="bg-neutral-focus text-neutral-content rounded-full w-[3rem]">
        <span className="text-2xl">{name.slice(0,1)}</span>
      </div>
    </div>
    </div>
  </div>
  </>
);

