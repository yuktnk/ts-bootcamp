import React, {FC, useState, useCallback, ChangeEvent} from 'react';
import styles from 'styles/utility/flex.module.scss';
import { TextInput, SearchButton } from 'components/atoms';
import { useStringChangeEvent } from 'lib/custonHooks'
import { searchHotels } from 'lib/hotels'



const SearchField: FC = () => {

  const [keyword, setKeyword] = useState<string>("");

  const handelKeyword = useStringChangeEvent(setKeyword);

  return (
    <div className={styles.flex__row_center}>
      <TextInput
        onChange={handelKeyword}
        type={"text"}
        value={keyword}
      />
      <SearchButton
        label={"Search"}
        onClick={() => searchHotels(keyword)}
      />
    </div>
  )
}

export default SearchField;