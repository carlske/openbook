'use client';

import { Funnel, X } from 'lucide-react';
import { useState } from 'react';
import Button from '../iu/Buttons';
import Select from '../iu/Select';
import Slider from '../iu/Slider';

const FilterSection = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [activeFilters, setActiveFilters] = useState(0);

  const showSlider = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  const handleSliderChange = (value: number) => {
    if (value !== 50) {
      setActiveFilters(1);
    } else {
      setActiveFilters(0);
    }
  };

  return (
    <>
      <section>
        <header className="flex items-center justify-between bg-gray-400/20 p-2">
          <Button variant="secondary" className="text-black dark:text-white" onClick={showSlider}>
            Filters ({activeFilters})
            <Funnel className="hover:text-secundary inline" />
          </Button>
          <Select className="p-2" />
        </header>

        <div className="p-2">
          {activeFilters === 0 ? (
            <span className="text-accent text-lg">No filters applied</span>
          ) : (
            <span className="text-pomp-and-power text-lg">{activeFilters} filter(s) applied</span>
          )}
        </div>
      </section>

      {/* Overlay */}
      {isSliderVisible && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => {
            return setIsSliderVisible(false);
          }}
          onKeyDown={e => {
            if (e.key === 'Escape') {
              setIsSliderVisible(false);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Close filter panel"
        />
      )}

      {/* Vertical Slider Panel from Left */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 transform bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-gray-900 ${isSliderVisible ? 'translate-x-0' : '-translate-x-full'} `}
      >
        <div className="p-6">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
            <Button
              variant="secondary"
              onClick={() => {
                return setIsSliderVisible(false);
              }}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </Button>
          </div>

          {/* Filter Content */}
          <div className="space-y-8">
            <div>
              <h4 className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">Price Range</h4>
              <Slider
                label="Price"
                min={0}
                max={100}
                defaultValue={50}
                orientation="horizontal"
                onValueChange={handleSliderChange}
              />
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">Rating</h4>
              <Slider
                label="Stars"
                min={1}
                max={5}
                step={0.1}
                defaultValue={3}
                orientation="horizontal"
                onValueChange={value => {
                  console.log('Rating:', value);
                }}
              />
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">Year Published</h4>
              <Slider
                label="Year"
                min={1900}
                max={2024}
                defaultValue={2000}
                orientation="horizontal"
                onValueChange={value => {
                  console.log('Year:', value);
                }}
              />
            </div>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <Button
                variant="secondary"
                onClick={() => {
                  setActiveFilters(0);
                }}
                className="w-full"
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
