import {
  Button as ButtonBase,
  Dialog,
  DialogContent as DialogContentBase,
  DialogTitle as DialogTitleBase,
  IconButton,
} from '@mui/material'
import {useState} from 'react'
import styled from '@emotion/styled'
import closeIcon from './close-icon.svg'
import { colors } from '../../config'

const Iframe = styled.iframe`
  border: 0;
  height: Calc(100vh - 100px);
  width: Calc(100vw);
  margin: 0;
  position: relative;
  left: -30px;
`

const DialogContent = styled(DialogContentBase)`
  overflow-x: hidden;
`

const DialogTitle = styled(DialogTitleBase)`
  display: inline-flex;
  justify-content: space-between;
`

const Button = styled(ButtonBase)`
  //max-width: 250px;
  //min-width: 200px;
  width: 300px;
  //line-height: 50px;
  display: inline-flex;
  align-self: stretch;
  margin: 15px 0;
  background-color: ${colors.primaryDark};
  &:hover {
    background-color: ${colors.primaryDarkHover};
  }
  &:active {
    background-color: ${colors.primaryDarkHover};
  }
`
const BookingPopup = () => {
  const [open, setOpen] = useState(false)
  return (<>
    <Button color={'secondary'} variant={'contained'} onClick={() => setOpen(true)}>Book Now!</Button>
    <Dialog fullScreen={true} maxWidth={false} open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        <>
          Candle Bar Booking
        </>
        <IconButton onClick={() => setOpen(false)}>
          <img src={closeIcon} alt={'Exit'} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Iframe src={'https://squareup.com/appointments/book/t8sxxqxfyess39/LCSD7GSVA1KCZ/start'}/>
      </DialogContent>
    </Dialog>
  </>)
}

export default BookingPopup
