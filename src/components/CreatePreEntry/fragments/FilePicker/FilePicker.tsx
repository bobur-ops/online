import { ComponentPropsWithoutRef, useCallback } from "react";
import { GrAttachment, GrCamera } from "react-icons/gr";
import styles from './FilePicker.module.css';
import clsx from "clsx";
import { BiTrash, BiX } from "react-icons/bi";

type FilePickerProps = Omit<ComponentPropsWithoutRef<'div'>, 'value ' | 'onChange'> & {
  value: File[],
  onChange: (value: File[]) => void
  mobile?: boolean
}

export default function FilePicker({ value, onChange, mobile, ...divProps }: FilePickerProps) {

  const handleAdd = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.currentTarget.files!).filter((item) => !Boolean(value.find((v) => v.name === item.name)));
    onChange([...value, ...newFiles].sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase())))
  }, [value, onChange])

  const handleRemoveFile = useCallback((index: number) => {
    onChange(value.filter((_, i) => i !== index));
  }, [value, onChange])

  const handleRemoveAll = useCallback(() => {
    onChange([]);
  }, [onChange])

  return (
    <div {...divProps} className={clsx(styles['root'], mobile && "mobile")}>
      <div className={styles['main']}>
        <div>
          <span>Прикрепить файлы</span>
          <GrAttachment />
          <input type="file" accept="image/*" multiple onChange={handleAdd} title="" />
        </div>
        <div>
          <span>Сфотографировать</span>
          <GrCamera />
          <input type="file" accept="image/*" multiple onChange={handleAdd} capture="environment" title="" />
        </div>
      </div>
      {value.length !== 0 && (
        <div className={styles['info-wrapper']}>
          <div className={styles['total-info']}>
            <span>Количество файлов: <b>{value.length}</b></span>
            <span className={styles['remove-all']}>
              <span>Удалить все</span>
              <BiTrash onClick={handleRemoveAll} />
            </span>
          </div>
          <div className={styles['info']}>
            {value.map((item, index) => (
              <div key={item.name}>
                <span>{item.name}</span>
                <BiTrash onClick={() => handleRemoveFile(index)} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
