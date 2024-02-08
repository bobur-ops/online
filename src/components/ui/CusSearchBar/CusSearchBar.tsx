import { forwardRef, useCallback, useRef, useState } from "react";
import CusInput from "@/components/ui/CusInput";
import { BiSearch, BiX } from "react-icons/bi";
import styles from './CusSearchBar.module.css';
import clsx from "clsx";

type CusSearchBarProps = Omit<Parameters<typeof CusInput>[0], 'startAdorment' | 'endAdorment'> & {
  clearOnBlur?: boolean
}

const CusSearchBar = forwardRef<HTMLInputElement, CusSearchBarProps>((props, ref) => {
  const [innerValue, setInnerValue] = useState('')
  const innerRef = useRef<null | HTMLInputElement>(null);

  // fill ref with instance and save innerRef
  const refWrapper = useCallback((instance: HTMLInputElement) => {
    if (ref) {
      if (ref instanceof Function) {
        ref(instance);
      } else {
        ref.current = instance;
      }
    }
    innerRef.current = instance;
  }, [ref]);

  const onChangeWrapper = useCallback((value: string) => {
    if (props.onChange) {
      props.onChange(value)
    }
    setInnerValue(value)
  }, [props, setInnerValue])

  const handleClearValue = useCallback(() => {
    onChangeWrapper('');
  }, [onChangeWrapper])

  const preventFocus = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
  }, []);

  const onBlurWrapper = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) {
      props.onBlur(event)
    }
    if (props.clearOnBlur ?? false) {
      handleClearValue();
    }
  }, [handleClearValue, props.clearOnBlur, props.onBlur])

  const value = props.value ?? innerValue;

  return (
    <CusInput
      {...props}
      ref={refWrapper}
      value={value}
      onChange={onChangeWrapper}
      onBlur={onBlurWrapper}
      startAdorment={<BiSearch onMouseDown={preventFocus} />}
      endAdorment={value !== '' && <BiX
        className={clsx(styles["clear-icon"])}
        onMouseDown={preventFocus}
        onClick={handleClearValue}
      />}
    />
  )
})

CusSearchBar.displayName = "SearchBar";

export default CusSearchBar;
